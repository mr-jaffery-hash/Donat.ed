import React, { useState } from 'react';

export const Heart = () => {
    const [likestatus, setLikeStatus] = useState('false')
    const [count, setCount] = useState(5    )

    const onClickLike = () => {
        let c = count
        if (likestatus === 'true') {
            setCount(c - 1)
            setLikeStatus('false')
        }
        else {
            setCount(c + 1)
            setLikeStatus('true')
        }
    }

    return (
        <div >
            <br />
            <button class="heartf" onClick={onClickLike}>
                <div class="heart-btn" >
                    {likestatus === 'true' ? (
                        <div class="contentf heart-active">
                            <span class="heart heart-active"></span>
                            <span class="textheart heart-active">Like</span>
                            <span class="numb heart-active">{count}</span>
                        </div>)
                        : (
                            <div class="contentf ">
                                <span class="heart "></span>
                                <span class="textheart ">Like</span>
                                <span class="numb ">{count}</span>
                            </div>
                        )
                    }
                </div>
            </button>
        </div>

    );
}