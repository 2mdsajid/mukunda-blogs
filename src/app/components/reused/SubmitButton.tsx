import React from 'react'

const SubmitButton = ({isClicked}:{isClicked:boolean}) => {
  return (
    <button type="submit" className={`border border-accent bg-dark-accent hover:bg-accent font-semibold text-white px-4 py-2 rounded-md shadow-md`}>{isClicked ? 'submitting..' : 'Submit'}</button>
  )
}

export default SubmitButton
