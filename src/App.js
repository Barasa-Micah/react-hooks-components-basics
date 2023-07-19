// import React from "react";
// import Article from "./Article";
// import Comment from "./Comment";

// function App() {
//   return (
//     <div>
//       <Article />
//       <Comment />
//     </div>
//   );
// }

// export default App;
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 200,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
