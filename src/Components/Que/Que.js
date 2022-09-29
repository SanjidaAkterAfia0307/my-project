import React from 'react';

const Que = () => {
    return (
        <div className='m-24'>
            <h1 className='text-6xl font-bold text-slate-700 text-center my-10'>Q&A</h1>
            <div npm >
                <div className='shadow-md p-12'>
                    <h4 className='text-slate-800 text-center m-4 font-bold text-4xl'>How does react work</h4>
                    <p>React is an open-source JavaScript library developed by the team at Facebook. It is used to build rich graphical user interfaces (UIs).React reads the objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM.React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p>
                </div>
                <div className='shadow-md p-12'>
                    <h4 className='text-slate-800 text-center m-4 font-bold text-4xl'>What is the use of useeffect react hooks</h4>
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments.The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.</p>
                </div>
                <div className='shadow-md p-12'>
                    <h4 className='text-slate-800 text-center m-4 font-bold text-4xl'>Difference between State and Props</h4>
                    <p><strong> There are some difference between State and Props :</strong> <br /><br />
                        <ul>
                            <li>Props are read-only.One the other hand,State changes can be asynchronous.</li>
                            <li>Props are immutable.But	State is mutable.</li>
                            <li>Props allow you to pass data from one component to other components as an argument and	State holds information about the components.</li>
                            <li>Props can be accessed by the child component.But	State cannot be accessed by child components.</li>
                            <li>Props are used to communicate between components.In opposite, States can be used for rendering dynamic changes with the component.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Que;