import React, { FC, useEffect, useRef, useState } from "react"
import { _blobToBase64 } from "../../utilities/utilities"
import { useIndexedDb } from "../../utilities/hooks"
import { LOADING_IMAGE } from "../../utilities/constants"
import { useHashLocation } from "../../utilities/hash_location"
import { useRoute } from "../../router"

export const DetailedPortrait: FC = () => {
    const [location, navigate] = useHashLocation()
    const [_, param] = useRoute("/:id")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const db_person = useIndexedDb("STORE_PERSON")
    const db_image = useIndexedDb("STORE_IMAGE")

    useEffect(() => {}, [location])

    async function savePersonDetails(name: string, description: string, tags: string[], imageId: number) {
        let person = await db_person.getByID(imageId)
        if (person) {
            person.name = name
            person.description = description
            await db_person.update(person)
        }
    }

    return (
        <div className="image-editor">
            <div className="image-editor-column-left">
                <img ref={imgRef} src={LOADING_IMAGE} className="image-editor-preview" />
            </div>
            <div className="image-editor-column-right">
                <div className="image-editor-column-right-button-group">
                    <button className="image-editor-compress-button text-button" onClick={(_) => {}}>
                        Edit
                    </button>
                    <button className="image-editor-paste-button text-button" onClick={(_) => {}}>
                        Select Image
                    </button>
                    <button className="image-editor-save-button text-button" onClick={(_) => {}}>
                        Save
                    </button>
                    <button className="image-editor-exit-button text-button" onClick={(_) => navigate("/home")}>
                        Exit
                    </button>
                </div>
                <div className="input-group">
                    <input
                        defaultValue={name}
                        type="text"
                        required={true}
                        autoComplete="off"
                        className="input-group-title"
                        name="title"
                        placeholder="Image title here..."
                        onChange={(e) => {
                            setName(e.currentTarget.value)
                        }}
                    />
                    <textarea
                        defaultValue={description}
                        autoComplete="off"
                        className="input-group-description"
                        name="description"
                        placeholder="Image description here..."
                        rows={5}
                        onChange={(e) => {
                            let val = e.currentTarget.value
                            setDescription(val)
                        }}
                    />
                </div>
                <canvas ref={canvasRef} className="image-editor-preview-canvas" />
            </div>
        </div>
    )
}
