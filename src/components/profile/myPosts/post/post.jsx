import React from 'react';
import s from './post.module.css';
import Like from './../likes/like.jsx';


const Post = (props) => {
    return (
        <div className={s.post__item}>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSrsa7JI0Kur9LTDnCQ-N3ctRlKSJ9zzbOFw&usqp=CAU'
                    alt='аватарка'/>
                {props.message}
            </div>
            <div className={s.buttom_like}>
                <Like/>
                {props.likesCounte}
            </div>
        </div>
    )
}

export default Post;