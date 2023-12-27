import { Component, EventEmitter, NgModule, OnInit, Output } from "@angular/core";
import { IPost } from "../post-model/i-post.interface";
import { PostsService } from "../services/posts.service";
import { EMPTY, Subject, catchError, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {
    @Output() readonly addPost = new EventEmitter<void>();

    public posts: IPost[] = [];
    public isLoading?: boolean;
    public postsRetrievedByService!: IPost[];
    public postId?: number;
    private destroy$ = new Subject<void>();

    
    constructor(
        private readonly postsService: PostsService,
        private readonly activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
       this.setPostId();
       this.listenToRouteIdChanges();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
      }
    
    
    private setPostId(): void {
        // this.postId = this.activatedRoute.snapshot.params['id'];
        this.activatedRoute.params.subscribe(params => {
            this.postId = params['id'];
        });
    }

    // Testing service events (observables):
    private listenToRouteIdChanges(): void {
        this.activatedRoute.params.subscribe(posts => {
            this.fetchPosts();
        });
    }

    public fetchPosts(): void {
        this.postsService.fetchPosts().pipe(
            catchError(() => {
                return EMPTY;
            }),
            takeUntil(this.destroy$)
        ).subscribe(posts => {
            this.postsRetrievedByService = posts;
        });
    }

    public getPosts(): IPost[] {
        return this.postsRetrievedByService;
    }


    public getPostsByTag(posts: IPost[], tag: string): IPost[] {
        return posts.filter(post => post.tags.includes(tag));
    }

    public setPosts(posts: IPost[]): void {
        this.posts = posts;
        this.setLoading(false);
    }

    public setLoading(status: boolean): void {
        this.isLoading = status;
    }


    public onAddPost(): void {
        this.addPost.next();
    }

}

@NgModule({
    declarations: [PostsComponent],
    exports: [PostsComponent]
})
export class PostsModule {
}

