import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({quote, author} ) => {

  const pReft = useRef();

  const [boxSize, setBoxSize] = useState({
    width: 0, height: 0
  });


  useLayoutEffect(() => {

    // console.log(pReft.current.getBoundingClientRect());

    const { width, height  } = pReft.current.getBoundingClientRect();

    setBoxSize({width, height});
    
    // return () => {
    //   second
    // };
  }, [quote])


  return (
    <>
      <blockquote className="blockquote text-end"
        style={{display: 'flex'}}
      >
        <p ref={pReft} className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>

    </>
  );
};
