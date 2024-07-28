import React from "react";

const ImgCard = ({ image, text = '', authorName = '', subject = '', department = '', path = '' }) => {
  return (
    <>
      <a href={'https://gpsakoli.ac.in' + path} target="_blank" className='card flex-center'>
        <div className='card-img'>

          <img src={`https://gpsakoli.ac.in/` + image} alt="Card" />
          <div className={'content'}>
            <p>{text}</p>
          </div>
        </div>
        <div className="card-details px-3 py-1">
          <p className="my-2"><b>Subject</b>: {subject}</p>
          <p className="my-2"><b>Department</b>: {department.charAt(0).toUpperCase() + department.slice(1)}</p>
          <p className="my-2"><b>Author Name</b>: {authorName}</p>
        </div>
      </a>

    </>
  );
};

export default ImgCard;