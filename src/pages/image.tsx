import React, { FC } from "react"
import { DashboardLayout } from "../components/_layout/Layout"
import { NewImage } from "../components/NewImage"

export const ImagePage: FC = () => {
    return (
        <DashboardLayout>
            <NewImage />
        </DashboardLayout>
    )
}
