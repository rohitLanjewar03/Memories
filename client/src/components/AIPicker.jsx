import CustomButton from './CustomButton' 

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='Ask AI...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <div className="flex items-center justify-center w-full">
          <CustomButton 
            type='outline'
            title='Asking AI...'
            customStyles='text-xs'
          />
          <div className="ml-2 spinner"> 
            <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
            </svg>
          </div>
        </div>
        ) : (
          <>
            <CustomButton
              type="outline"
              title='AI Logo'
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />
            <CustomButton
              type="filled"
              title='AI Full'
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs'
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker
