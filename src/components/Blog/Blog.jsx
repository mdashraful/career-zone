import React from 'react';
import SinglePageBanner from '../SinglePageBanner/SinglePageBanner';

const Blog = () => {
    return (
        <div>
            <div className='bg-indigo-50 md:px-24 px-5 m-auto'>
                <SinglePageBanner>Blog</SinglePageBanner>
            </div>
            <div className='md:px-24 px-5 m-auto py-28'>
                <div className="mb-3">
                    <h3 className="font-bold text-gradient text-lg">
                        1. When Should you use context api?
                    </h3>
                    <p className="ml-5 mt-2 text-lg">
                        Context api is a very powerful function in React. Basically, we use context api when some data needs to be accessible by many components. But we can also access data by props drilling in the child components.  When our project is large, it will be very difficult and definitely it can't handle the reuse concept.
                        So, we should use the context api which is created in the parent component and wrap the main element. All child components under the main element can access this data without drilling.
                    </p>
                </div>
                <div className="mb-3">
                    <h3 className="font-bold text-gradient text-lg">
                        2. What is custom hook?
                    </h3>
                    <p className="ml-5 mt-2 text-lg">
                        A custom hook is React's function which starts with "use". When stateful logic needs to be shared by two components then we can use a custom hook. It gives us the opportunity to copy the same logic for different components and increase reusability.
                    </p>
                </div>
                <div className="mb-3">
                    <h3 className="font-bold text-gradient text-lg">
                        3. What is useRef? How does it work?
                    </h3>
                    <p className="ml-5 mt-2 text-lg">
                        useRef is React function's built-in hook which is immutable. In React we can not directly access DOM elements. So we can access DOM elements by using useRef. It takes an initial value and returns an object and we can access it by ".current" property.                    </p>
                </div>
                <div className="mb-3">
                    <h3 className="font-bold text-gradient text-lg">
                        4. What is useMemo? How does it work?
                    </h3>
                    <p className="ml-5 mt-2 text-lg">
                        useMemo is React  built-in hook function which returns a memorized value. It takes dependency, and when this dependency has changed it recomputes the value.
                        This function helps to avoid costly calculations on every rendering.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;