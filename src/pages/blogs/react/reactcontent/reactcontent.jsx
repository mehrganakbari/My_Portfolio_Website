import "../../../../index.css";
import react from "/src/assets/images/blogs/react.png";

function ReactBlogContents() {
  return (
    <div className="pb-10 px-5 mx-auto container max-w-[1440px] text-white">
      <img src={react} alt="" className="rounded-lg" />
      <div className="my-5">
        <p className="my-2 text-yellow-400">What is react.jsg?</p>
        <p>
          React is a JavaScript library for building user interfaces. It was
          developed by Facebook and is now maintained by a community of
          developers. React allows developers to build reusable UI components
          and manage the state of the application in a more declarative way than
          traditional imperative programming.
        </p>
        <p className="py-2">
          React uses a virtual DOM (Document Object Model) which allows it to
          efficiently update the user interface in response to changes in the
          state of the application. Rather than updating the actual DOM
          directly, React updates a virtual representation of the DOM, compares
          it with the previous version, and only applies the necessary changes
          to the real DOM.
        </p>
        <p>
          React is often used in conjunction with other libraries and frameworks
          such as Redux for state management, React Router for handling
          client-side routing, and Axios for making HTTP requests. It is widely
          used in the development of single-page applications, mobile
          applications, and other web-based projects.
        </p>
      </div>
    </div>
  );
}

export default ReactBlogContents;
