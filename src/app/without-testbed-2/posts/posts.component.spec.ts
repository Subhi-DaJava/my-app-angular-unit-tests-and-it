import { EMPTY, Subject, of, throwError } from "rxjs";
import { IPost } from "../post-model/i-post.interface";
import { PostsComponent } from "./posts.component";

describe('AppComponent', () => {
    let component: PostsComponent;
    let postsMock: IPost[];
    let postsServiceMock: any;
    let activatedRouteMock: any;

    // Testing service events (observables)
    let paramsChange$: Subject<any>;;

    beforeEach(() => {
        paramsChange$ = new Subject();
        postsServiceMock = {
            fetchPosts: jest.fn().mockReturnValue(of({}))
        };

        activatedRouteMock = {
            params: paramsChange$,
            snapshot: {
              params: { id: 7 }
            }
          } as any;
        // activatedRouteMock = {
        //     params: of({ id: 7 }),
        //     paramsChange: paramsChange$.asObservable()
        // };
        /*
        activatedRouteMock = {
      snapshot: {
        params: { id: 7 }
        }
       } as any;
        */

        postsMock = [
            { id: '1', tags: 'angular' },
            { id: '2', tags: 'html' },
            { id: '4', tags: 'css' },
            { id: '3', tags: 'angular' },
            { id: '5', tags: 'javascript' }
        ];

        component = new PostsComponent(postsServiceMock, activatedRouteMock);
        component.posts = postsMock;
    });

    describe('#getPostsByTag', () => {
        it("should return correct posts", () => {
            const tag = 'angular';
            const expectedPosts: IPost[] = [postsMock[0], postsMock[3]];
            expect(component.getPostsByTag(postsMock, tag)).toEqual(expectedPosts);
        });

        describe('#setPosts', () => {
            const POSTS_LIST_MOCK = [
                { id: '1', tags: 'angular' },
                { id: '2', tags: 'html' },
                { id: '4', tags: 'css' },
                { id: '3', tags: 'angular' },
                { id: '5', tags: 'javascript' }
            ];

            it("should set posts", () => {
                const expectedPosts: IPost[] = [];
                component.setPosts(expectedPosts);
                expect(component.posts).toEqual(expectedPosts);
                expect(component.posts.length).toEqual(0);
            });

            it("should set correct posts", () => {
                const expectedPosts: IPost[] = [
                    { id: '1', tags: 'angular' },
                    { id: '2', tags: 'html' },
                    { id: '4', tags: 'css' },
                    { id: '3', tags: 'angular' },
                    { id: '5', tags: 'javascript' }
                ];
                component.setPosts(expectedPosts);
                expect(component.posts).toEqual(expectedPosts);
                expect(component.posts.length).toEqual(5);
            });

            it("should set loading", () => {
                const expectedStatus = false;
                component.setLoading(expectedStatus);
                expect(component.isLoading).toEqual(expectedStatus);
            });

            it("should set loading calling spyOn", () => {
                const sypOnSetLoading = jest.spyOn(component, 'setLoading');
                component.setPosts(POSTS_LIST_MOCK);

                expect(sypOnSetLoading).toHaveBeenCalledWith(false);
                expect(sypOnSetLoading).toHaveBeenCalledTimes(1);
            });
        });

        describe('#onAddPost', () => {
            it("should emit addPost output event", () => {
                // spy on Output event via 
                const spyOnAddPost = jest.spyOn(component.addPost, 'next');
                component.onAddPost();

                expect(spyOnAddPost).toHaveBeenCalledTimes(1);
                expect(component.addPost.next).toHaveBeenCalledTimes(1);
            });
        });

        describe('#fetchPosts', () => {
            it("should call fetchPosts from postsService", () => {
                const posts = [
                    { id: '1', tags: 'angular' },
                    { id: '2', tags: 'html' },
                    { id: '5', tags: 'javascript' }
                ]
                const spyOnPostsService = jest.spyOn(postsServiceMock, 'fetchPosts').mockReturnValue(of(posts));
                component.fetchPosts();

                expect(spyOnPostsService).toHaveBeenCalledTimes(1);
                expect(component.postsRetrievedByService).toEqual(posts);
            });

            it("should return EMPTY", () => {
                // Since spyies do not return observable, that explicitly returns observable 
                // via this spy which is used to prevent erorr on subscribe.
                const spyOnPostsService = jest.spyOn(postsServiceMock, 'fetchPosts').mockReturnValue(EMPTY);
                component.fetchPosts();
                expect(spyOnPostsService).toHaveBeenCalledTimes(1);
                expect(component.postsRetrievedByService).toBeUndefined();

            });

            it("should return Error and PostsRetrievedByService be undefiend", () => {
                const spyOnPostsService = jest.spyOn(postsServiceMock, 'fetchPosts')
                    .mockReturnValue(throwError(() => new Error("An Error Occured!")));
                component.fetchPosts();
                expect(spyOnPostsService).toHaveBeenCalledTimes(1);
                expect(component.postsRetrievedByService).toBeUndefined();

            });
        });

        describe('#ngOnInit test suites', () => {
            it("should call setPostId and set post id", () => {
                component.ngOnInit();
                paramsChange$.next({id: 7});
                expect(component.postId).toEqual(7);
            });
        });

        describe('Testing service events (observables) suites:', () => { 
            it("should route id change", () => {
                component.ngOnInit();
                const spyOnFetchPosts = jest.spyOn(component, 'fetchPosts');
                paramsChange$.next({ id: 7 });
                expect(spyOnFetchPosts).toHaveBeenCalledTimes(1);
                expect(component.postId).toEqual(7);
                expect(component.fetchPosts).toHaveBeenCalledTimes(1);
                
            });
        });

    });
});