import "../../../../../index.css";
import oop from "/src/assets/images/blogs/OOP.png";

function OopBlogContents() {
  return (
    <div className="pb-10 px-5 mx-auto container max-w-[1440px] text-white">
      <img src={oop} alt="" className="rounded-lg" />
      <div className="my-5">
        <p className="my-2 text-yellow-400">What is Class?</p>
        <p>
          Classes and objects are fundamental concepts in data structures and
          algorithms. Learning the concept of class in all object-oriented
          programming languages, including Java, Python, C#, Ruby, and other
          languages, is considered the basis of object-oriented education. In
          this article, the concept of class in object-oriented programming and
          other concepts related to class in object-oriented programming,
          including object, attribute, method, constructor and other cases, are
          explained in simple terms.
        </p>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">
          What is Object Oriented Programming?
        </p>
        <p>
          Object Oriented Programming (OOP) is a programming method that uses
          objects. An object can have attributes and functional capabilities
          just like an entity in the real world. Object-oriented programming is
          used to structure a software program and convert it into simple and
          usable parts. Object-oriented programming skills have emerged to bring
          programming concepts closer to real-world concepts.
        </p>
        <p className="py-2">
          Classes and objects are fundamental concepts in data structures and
          algorithms. Learning the concept of class in all object-oriented
          programming languages, including Java, Python, C#, Ruby, and other
          languages, is considered the basis of object-oriented education. In
          this article, the concept of class in object-oriented programming and
          other concepts related to class in object-oriented programming,
          including object, attribute, method, constructor and other cases, are
          explained in simple terms.
        </p>
        <p>
          Consider that a car is an object. This object has a series of
          characteristics such as color, weight, speed, etc., which are the
          characteristics of this car. Anything that has specific information,
          behavior, or properties is called an object.
        </p>
        <p className="py-2">
          These characteristics, attributes and any behavior that this object
          shows with it are also called attributes, and any behavior that this
          object shows by itself is called behavior. Therefore, in the example
          above, the car is an object, and characteristics such as color, Speed
          the characteristics and behavior or actions of this car, such as
          honking, braking, are called behavioral objects, which are called
          behavior itself. So, in the example above, the car is an object that
          Characteristics such as color, speed characteristics and behavior or
          actions of this car, horn, brake, are called behavioral objects.
        </p>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">
          What are the principles of object oriented programming?
        </p>
        <p>
          Object-oriented programming is a way of designing programs using
          classes and objects. By implementing object orientation, we can
          organize objects in the program. This method is also used as a subject
          to control data in codes. Object orientation in programming is a
          discipline that, in addition to the two main concepts of -class- and
          -object-, includes the following four principles and key features.
          These four principles of object oriented programming are listed below:
          Features such as color, speed, and features and behavior or actions of
          this car, such as horn, brake, are called behavioral objects.
        </p>
        <ul className="px-6 py-2 mt-3 list-disc">
          <li>abstraction</li>
          <li>encapsulation</li>
          <li>inheritance</li>
          <li>polymorphism</li>
        </ul>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">What is abstraction?</p>
        <p>
          Abstraction in object orientation is a process based on which only
          required information is displayed and unnecessary information is
          hidden. Abstraction means hiding the internal implementations and
          showing the required features or set of services. Abstraction is one
          of the most important principles of object-oriented programming. It
          can be said that the main purpose of abstraction is to -hide- data.
          Abstraction means selecting the right data from a large group of data
          to represent the information needed to help reduce the complexity and
          challenges of the application.
        </p>
        <p className="my-2 text-yellow-400">
          There are 2 types of abstractions in object oriented programming, they
          are:
        </p>
        <ul className="px-6 py-2 mt-3 list-disc">
          <li>Data abstraction</li>
          <li>Process abstraction</li>
        </ul>
        <p className="my-2 text-yellow-400">
          Abstraction in object-oriented programming has significant advantages,
          which include:
        </p>
        <ul className="px-6 py-2 mt-3 list-disc">
          <li>Security</li>
          <li>Easy reinforcement program</li>
          <li>Improved ease of programming</li>
        </ul>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">What is encapsulation?</p>
        <p>
          Encapsulation is considered one of the important principles of
          object-oriented programming and means placing data and features or
          methods and data members in one unit. In the classes of an
          object-oriented program, there are data and properties, and operations
          are performed on the data. Based on this principle of object
          orientation, the data is integrated into a single unit. Encapsulation
          increases the security of the program; Because everything related to a
          single task is grouped in it and access to data will be done as
          needed.
        </p>
        <p className="py-2">
          By linking data and code to create a single entity, this process can
          secure them and prevent them from being misused and prevented by
          external agents. Encapsulation makes the methods in each class only
          have access to the data of the same class, and the methods of other
          classes do not have access to the data of the desired class. The data
          of the encapsulated class is hidden from the classes and they will not
          have access to this data. The concept of encapsulation is also known
          as the method of -data hiding-. Hiding also limits the data of the
          classes and the world outside the classes to these data.
        </p>
        <p className="my-2 text-yellow-400">
          Encapsulation in object-oriented programming has significant
          advantages,Including:
        </p>
        <ul className="px-6 py-2 mt-3 list-disc">
          <li>
            By using the encapsulation method, it is possible to provide very
            high security for data.
          </li>
          <li>
            Encapsulation groups data and operations together into a unit.
          </li>
          <li>
            This method adds a layer of security to the data and allows the user
            to access only the authorized layers.
          </li>
        </ul>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">What is inheritance?</p>
        <p>
          Inheritance is one of the principles of object-oriented programming,
          by using which the features of a class can be used in a new class. It
          is assumed that there is a class and it is considered as the -Parent-
          class, and this class has several methods related to other classes.
          Then, the class is declared as a -child- class, which has methods
          associated with it. Therefore, when a child class inherits from a
          parent class, the child class can use the methods in the parent class
          in addition to the methods it has in the class itself. This is called
          inheritance in object-oriented programming.
        </p>
        <ul className="px-6 py-2 mt-3 list-disc">
          <li>It reduces redundancy in codes.</li>
          <li>
            It reduces the size of the source codes and improves the readability
            of the codes.
          </li>
          <li>
            It simplifies code by dividing it into groups of parent and child
            classes.
          </li>
          <li>
            Extensibility is supported by overriding base class functions by
            child classes.
          </li>
          <li>
            Because with the ability to use code, the base class code is always
            being tested and debugged, increasing in applications.
          </li>
        </ul>
        <p className="my-2 text-yellow-400">
          There are different types of inheritance, which include:
        </p>
        <ul className="px-6 py-2 mt-3 list-disc">
          <li>Single Level</li>
          <li>Multilevel</li>
          <li>Multiple</li>
          <li>Multipath</li>
          <li>Hierarchical</li>
          <li>Hybrid</li>
        </ul>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">What is Class?</p>
        <p>
          Classes and objects are fundamental concepts in data structures and
          algorithms. Learning the concept of class in all object-oriented
          programming languages, including Java, Python, C#, Ruby, and other
          languages, is considered the basis of object-oriented education. In
          this article, the concept of class in object-oriented programming and
          other concepts related to class in object-oriented programming,
          including object, attribute, method, constructor and other cases, are
          explained in simple terms.
        </p>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">What is polymorphism?</p>
        <p>
          polymorphism is the basic and most needed principle of object-oriented
          programming. The word -Polymorphism- is created from the combination
          of two words -Poly- meaning -many- and the word -Morph- meaning shape
          or form. Therefore, polymorphism can also be called polymorphism or
          polymorphism. In object-oriented programming, any object or method
          that has more than one name is related to this concept, and this is
          nothing but polymorphism. Polymorphism occurs in the existence of many
          forms in the program, or it can be said that I consider polymorphism,
          which performs a unit in various ways.
        </p>
        <p className="py-2">
          Polymorphism is used in programming to increase readability and data
          reuse. As in the real world, a person can have a different role in
          different situations. Like a woman in front of her child as a mother
          and in the workplace as an employee, in polymorphism, a task is
          defined differently based on its position and behavior. Occurs when
          many classes are linked by multiple links through inheritance.
        </p>
        <p>
          Classes and objects are fundamental concepts in data structures and
          algorithms. Learning the concept of class in all object-oriented
          programming languages, including Java, Python, C#, Ruby, and other
          languages, is considered the basis of object-oriented education. In
          this article, the concept of class in object-oriented programming and
          other concepts related to class in object-oriented programming,
          including object, attribute, method, constructor and other cases, are
          explained in simple terms.
        </p>
      </div>
      <div className="my-5">
        <p className="my-2 text-yellow-400">Conclusion</p>
        <p>
          Oriented programming principles are considered the most widely used
          programming pattern and help the development of large and small
          object-oriented applications so that developers can use them to create
          efficient applications. These programming principles help strengthen
          and secure application objects by using powerful principles of
          abstraction and encapsulation. The most popular object-oriented
          programming languages include Python, Java, Ruby, and others
        </p>
      </div>
    </div>
  );
}

export default OopBlogContents;
