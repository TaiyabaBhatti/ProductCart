import React from 'react';

const InputErrors = ({errors,labelFor}) => {
    return (
       <>
        {errors[labelFor] && (
                    <p className="text-red-500 text-end text-sm mb-4">
                      {errors[labelFor].message}
                    </p>
                  )}
       </>
    );
}

export default InputErrors;
