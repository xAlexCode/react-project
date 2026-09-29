import profilePicture from "../../assets/profile-picture.png"
import Post from '../post/Post';

const Main = () => {
  const post = {
    headline: 'Some headline',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.',
    date: new Date(),
    author: {
      fullname: 'John Doe',
      image: profilePicture,
    },
  }

  const comment = {
    content: 'Awesome post dude!',
    date: new Date(),
    author: {
      fullname: 'Jane Doe',
      image: profilePicture,
    },
  };

  return (
    <main className="main">
      <Post post={post} comment={comment} />
    </main>
  );
};

export default Main;
