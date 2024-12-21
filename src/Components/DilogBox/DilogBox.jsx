const DilogBox = () => {
  return (
    <div className='absolute top-0 z-40 w-full h-full bg-slate-100 flex justify-center items-center'>

        <div className='w-[400px] shadow-md bg-white'>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', maxWidth: '100%', width: '100%' }}>
      <iframe
        src="https://www.loom.com/embed/75c03cf0b4274ebabea8a359d9f164c2?sid=889a4546-01ac-4833-8564-39a21513ea04"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Loom Video"
      ></iframe>
    </div>
        </div>
      
    </div>
  )
}

export default DilogBox
