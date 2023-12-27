import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IPost } from '../post-model/i-post.interface';


@Injectable({
    providedIn: 'root'
})
export class PostsService {
    /* 
    Testing service events (observables)
    assigning new `Subject observable` to method of service which 
    returns observable to have a control for manual triggering events.
    */
    private postsSubject: Subject<IPost[]> = new Subject<IPost[]>();
    public posts$: Observable<IPost[]> = this.postsSubject.asObservable();


    constructor(private http: HttpClient) { }

    fetchPosts(): Observable<IPost[]> {
        const postsObservable = this.http.get<IPost[]>('https://api.example.com/posts');
        postsObservable.subscribe((posts) => {
            // Emit the fetched posts to the posts$ observable
            this.postsSubject.next(posts);
        });

        return postsObservable;
    }

    // Method to manually trigger events with new posts
    triggerNewPostsEvent(newPosts: IPost[]): void {
        this.postsSubject.next(newPosts);
    }
}
