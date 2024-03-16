import React from 'react'

function Blog(props)
{
    const items = props.contents.map((content) =>{
        return (
            <div>
                <div>
                    <p>{content.id}</p>
                    <p>
                        {content.title}
                    </p>
                    <p>
                        {content.content}
                    </p>
                </div>

                <Content  key = {content.id} content = {content}/>
            </div>

        )

    })

    return (
        <div>
            {items}
        </div>
    )
}

function Content(props)
{
    const {id, title, content} = props.content;
    return (
        <div>
            <p>
                {id}
            </p>
            <p>
                {title}
            </p>
            <p>
                {content}
            </p>
        </div>
    )
}

export default Blog;