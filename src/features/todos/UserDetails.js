import React from 'react';

const UserAvatar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none">
    <g clipPath="url(#a)">
      <path fill="#E3E3E3" d="M0 0h100v100H0z"/>
      <rect width="82" height="82" x="9" y="79" fill="#BABABA" rx="25"/>
      <circle cx="50.5" cy="43.5" r="29.5" fill="#BABABA"/>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h100v100H0z"/>
      </clipPath>
    </defs>
  </svg>
);

export const UserDetails = ({ user }) => {
  const { name, username, email, address, phone, website, company } = user;

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <UserAvatar />

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '400px' }}>
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Username:</strong> {username}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      </div>
    </div>
  );
};


