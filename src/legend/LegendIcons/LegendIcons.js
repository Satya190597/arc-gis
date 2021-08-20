import React from 'react';

const LegendIcons = ({imageData,height,width,label}) => {
    const imageSrc = "data:image/png;base64," + imageData
    return  (
        <div>
            <img src={imageSrc} width={width} height={height} />
            <span>{label}</span>
        </div>
    )
}

export default LegendIcons;