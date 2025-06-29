

const Container = ({ children}:{children: React.ReactNode}) => {
  return (
    <div className='max-w-[1920px] w-full h-full mx-auto px-4 py-2 '>
      {children}
    </div>
  );
};

export default Container;