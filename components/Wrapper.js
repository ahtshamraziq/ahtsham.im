export default ({ children }) => (
  <div className='wrapper'>
    <div>{children}</div>
    <style jsx>
      {`
        .wrapper {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `}
    </style>
  </div>
)
