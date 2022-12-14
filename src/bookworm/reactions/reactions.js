import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {reactToBookThunk, undoReactToBookThunk} from "./services/reactions-thunks";

const ReactionsComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {bookDetails} = useSelector((state) => state.bookDetails)
    const {reactions} = useSelector((state) => state.reactions)

    const [userReactions, setUserReactions] = useState({
        nice: false,
        loved: false,
        well_written: false,
        confusing: false,
        informative: false,
        hated: false
    })

    const generateUserReactions = () => {
        const reactionsObject = {}

        Object
            .keys(reactions)
            .forEach(
                reaction => {
                    reactionsObject[reaction] = reactions[reaction].includes(currentUser._id)
                }
            )

        setUserReactions(reactionsObject)
    }

    const dispatch = useDispatch()
    const handleReactionClick = (reaction) => {
        const update = {
            bookID: bookDetails.id,
            reaction: reaction
        }

        const currentReaction = userReactions[reaction]

        if (currentReaction) {
            console.log('should call undo react to thunk')
            console.log(update)

            dispatch(undoReactToBookThunk(update))

            setUserReactions({
                ...userReactions,
                reaction: false,
            })
        } else {
            console.log('should call react to thunk')
            console.log(update)

            dispatch(reactToBookThunk(update))

            setUserReactions({
                ...userReactions,
                reaction: true,
            })
        }
    }

    useEffect(() => {
        if (currentUser) {
            generateUserReactions()
        }
    }, [reactions])

/*    useEffect(() => {

    }, [userReactions])*/

    return(
        <>
            <div className={"bg-white border border-2 border-dark border-opacity-10 p-4 rounded mb-3"}>
                <div className={"wd-green fw-bold mb-2"}>
                    Community Reactions
                </div>

                {/*nice button*/}
                <div>
                    {
                        currentUser
                            ?
                                <button
                                    type="button"
                                    className={`btn btn-outline-dark btn-sm me-2 mb-1
                                         ${userReactions.nice ? 'active' : null}
                                    `}
                                    data-bs-toggle="button"
                                    onClick={() => {
                                        handleReactionClick("nice")
                                    }}
                                >
                                    <i className={"bi bi-hand-thumbs-up-fill"}></i>
                                </button>
                            :
                                <button
                                    type="button"
                                    className="btn btn-outline-dark btn-sm me-2 mb-1"
                                    disabled
                                >
                                    <i className={"bi bi-hand-thumbs-up-fill"}></i>
                                </button>
                    }
                    <span className={"wd-pink"}>Nice </span>
                    <span>({reactions.nice.length})</span>
                </div>

                {/*loved button*/}
                <div>
                    {
                        currentUser
                            ?
                            <button
                                type="button"
                                className={`btn btn-outline-dark btn-sm me-2 mb-1
                                    ${userReactions.loved ? 'active' : null}
                                `}
                                data-bs-toggle="button"
                                onClick={() => {
                                    handleReactionClick("loved")
                                }}
                            >
                                <i className={"bi bi-heart-fill"}></i>
                            </button>
                            :
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-sm me-2 mb-1"
                                disabled
                            >
                                <i className={"bi bi-heart-fill"}></i>
                            </button>
                    }
                    <span className={"wd-pink"}>Loved it </span>
                    <span>({reactions.loved.length})</span>
                </div>

                {/*well written button*/}
                <div>
                    {
                        currentUser
                            ?
                            <button
                                type="button"
                                className={`btn btn-outline-dark btn-sm me-2 mb-1
                                    ${userReactions.well_written ? 'active' : null}
                                `}
                                data-bs-toggle="button"
                                onClick={() => {
                                    handleReactionClick("well_written")
                                }}
                            >
                                <i className={"bi bi-pencil-fill"}></i>
                            </button>
                            :
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-sm me-2 mb-1"
                                disabled
                            >
                                <i className={"bi bi-pencil-fill"}></i>
                            </button>
                    }
                    <span className={"wd-pink"}>Well-written </span>
                    <span>({reactions.well_written.length})</span>
                </div>

                {/*confusing button*/}
                <div>
                    {
                        currentUser
                            ?
                            <button
                                type="button"
                                className={`btn btn-outline-dark btn-sm me-2 mb-1
                                    ${userReactions.confusing ? 'active' : null}
                                `}
                                data-bs-toggle="button"
                                onClick={() => {
                                    handleReactionClick("confusing")
                                }}
                            >
                                <i className={"bi bi-question-lg"}></i>
                            </button>
                            :
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-sm me-2 mb-1"
                                disabled
                            >
                                <i className={"bi bi-question-lg"}></i>
                            </button>
                    }
                    <span className={"wd-pink"}>Confusing </span>
                    <span>({reactions.confusing.length})</span>
                </div>

                {/*informative button*/}
                <div>
                    {
                        currentUser
                            ?
                            <button
                                type="button"
                                className={`btn btn-outline-dark btn-sm me-2 mb-1
                                    ${userReactions.informative ? 'active' : null}
                                `}
                                data-bs-toggle="button"
                                onClick={() => {
                                    handleReactionClick("informative")
                                }}
                            >
                                <i className={"bi bi-lightbulb-fill"}></i>
                            </button>
                            :
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-sm me-2 mb-1"
                                disabled
                            >
                                <i className={"bi bi-lightbulb-fill"}></i>
                            </button>
                    }
                    <span className={"wd-pink"}>Informative </span>
                    <span>({reactions.informative.length})</span>
                </div>

                {/*hated button*/}
                <div>
                    {
                        currentUser
                            ?
                            <button
                                type="button"
                                className={`btn btn-outline-dark btn-sm me-2 mb-1
                                    ${userReactions.hated ? 'active' : null}
                                `}
                                data-bs-toggle="button"
                                onClick={() => {
                                    handleReactionClick("hated")
                                }}
                            >
                                <i className={"bi bi-heartbreak-fill"}></i>
                            </button>
                            :
                            <button
                                type="button"
                                className="btn btn-outline-dark btn-sm me-2 mb-1"
                                disabled
                            >
                                <i className={"bi bi-heartbreak-fill"}></i>
                            </button>
                    }
                    <span className={"wd-pink"}>Hated it </span>
                    <span>({reactions.hated.length})</span>
                </div>
            </div>
        </>
    )
}

export default ReactionsComponent