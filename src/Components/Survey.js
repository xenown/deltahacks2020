import React, { useEffect } from 'react';

export default function Survey(props) {
    useEffect(() => {
        props.setSearchbar(false);
    })
    return (
        <div className="Land">
            Survey!
        </div>
    );
}
