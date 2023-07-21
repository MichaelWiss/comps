import React from 'react';




function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
}) {
    return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500">{children}</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = 
          Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, warning, success, danger can be true');
        }
    },
};

export default Button;