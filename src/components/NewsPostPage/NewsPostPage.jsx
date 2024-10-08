import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { DataContext } from "../Context"
import PostsRender from "../PostsRender/PostsRender"
import PostPreview from "../PostPreview/PostPreview"
import { GSAPI } from "../API"
import { setPageTitle } from "../Global"
import ButtonImage from "../ButtonImage/ButtonImage"
import imgNews from "../../assets/svg/News.svg"

import "./NewsPostPage.css"

export default function NewsPostPage() {
    useEffect(() => {setPageTitle("Новости")}, [])
    const Context = useContext(DataContext)
    const Navigate = useNavigate()
    const URLparams = useParams()

    const [postData, setPostData] = useState([])
    const [postNotFound, setPostNotFound] = useState(false)

    useEffect(() => {
        // Загрузка постов по post_id
        GSAPI("GETpost", {post_id: URLparams.id}, (data) => {
            console.log("GSAPI: GETpost id=" + URLparams.id);

            // Если не найден пост - ошибка
            if (!data.success || !Object.keys(data).length) {
                setPostNotFound(true)
                return
            }

            setPostData([data.data])
        })
    }, [URLparams.id]);

    return (
        <article>
            <h4 className="page-title">h/news</h4>

            {/* Если пост найден */}
            {Object.keys(postData).length && Context.Users.length
                ? <>
                    <PostsRender
                        posts={postData}
                    />

                    <section className="flex-col">
                        <ButtonImage
                            src={imgNews}
                            text="Читать новости"
                            title="Открыть страницу новостей"
                            width100
                            onClick={() => Navigate("/news")}
                        />
                    </section>
                </>
                
                // Если пост не найден, будет показан только когда будет ошибка
                : <> 
                    {postNotFound
                        ? <section className="flex-col">
                            <h2>Пост не найдена!</h2>
                            <ButtonImage
                                src={imgNews}
                                text="Читать новости"
                                title="Открыть страницу новостей"
                                width100
                                onClick={() => Navigate("/news")}
                            />
                          </section>

                        // Предпоказ страницы
                        : <PostPreview />
                    }
                </>
            }
        </article>
    )
}
