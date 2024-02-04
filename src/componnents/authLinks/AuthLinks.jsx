// import React from 'react';
// import styles from './authLinks.module.css';
// import { Link } from 'next/link'; // Correct import with curly braces

// const AuthLinks = () => {
//   // temporary
//   const status = 'notauthenticated';
//   return (
//     <>
//       {status === 'notauthenticated' ? (
//         <Link href="/login">Login</Link>
//       ) : (
//         <Link href="/write">Write</Link>
//       )}
//     </>
//   );
// };

// export default AuthLinks;

import React from 'react';
import styles from './authLinks.module.css';
import  Link  from 'next/link'; // Correct import with curly braces

const AuthLinks = () => {
  // temporary
  const status = 'notauthenticated';
  return (
    <>
      {status === 'notauthenticated' ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
