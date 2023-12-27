import { IPost } from './../post-model/i-post.interface';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { PostsService } from './posts.service';


describe('PostsService', () => {
    let service: PostsService;
    let httpClient: HttpClient;
    let postsMock: IPost[];
    beforeEach(() => {
        httpClient = { get: jest.fn() } as any;
        service = new PostsService(httpClient);
    });

    describe('#fetchPosts', () => {
        postsMock = [
            { id: '1', tags: 'angular' },
            { id: '2', tags: 'html' },
            { id: '3', tags: 'javascript' }
        ];

        it('should return posts', done => {
            const postsMock: IPost[] = [
                { id: '1', tags: 'angular' },
                { id: '2', tags: 'html' },
                { id: '3', tags: 'javascript' }
            ];
            jest.spyOn(httpClient, 'get').mockReturnValue(of(postsMock));

            service.fetchPosts().subscribe(posts => {
                expect(posts).toEqual(postsMock);
                done();
            });
        });

        it('should handle error', done => {
            jest.spyOn(httpClient, 'get').mockReturnValue(throwError(() => new Error('An error occurred!')));

            service.fetchPosts().subscribe({
                next: (data) => { },
                error: error => {
                    expect(error).toEqual(new Error('An error occurred!'));
                    done();
                }
            });
        });

        /*
        The triggerNewPostsEvent method is designed to take an array of posts (newPosts) and push them into the postsSubject Subject. The next method is used to push the new posts into the Subject, which will then be emitted to any subscribers.
        The test case begins by subscribing to the posts$ Observable in the PostsService. This Observable is expected to emit the new posts whenever triggerNewPostsEvent is called. The subscribe method takes a function that will be called whenever the Observable emits a new value. In this case, the function takes the emitted posts and checks that they are equal to postsMock, which is the mock data used for the test.
        The done function in Jest is used to let Jest know that the test has finished. This is especially useful when testing asynchronous code. If done is not called, Jest will end the test as soon as it hits the end of the test function, potentially before your asynchronous code has had a chance to complete.

        Here's the corrected explanation:

        The done function is called to signal that the asynchronous test has completed. This is necessary because the test involves an Observable, which is asynchronous. By calling done, you tell Jest that it should wait for the Observable to emit before completing the test.
        */

        describe('#triggerNewPostsEvent', () => {
            it('should trigger new posts event', done => {
                service.posts$.subscribe(posts => {
                    expect(posts).toEqual(postsMock);
                    done();
                });
                service.triggerNewPostsEvent(postsMock);
                expect(httpClient.get).not.toHaveBeenCalled();
            });
        });
    });
});