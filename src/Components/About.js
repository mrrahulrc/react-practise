import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <User name="rahul chaudhari functional component" location="surat" />
      <UserClass name="rahul chaudhari class component" location="surat" />
    </div>
  );
};

export default About;
