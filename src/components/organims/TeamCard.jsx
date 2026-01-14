import { PhotoTeamCard } from "../atoms/PhotoTeamCard"
import { TitleTeamCard } from "../atoms/TitleTeamCard"

export const TeamCard = ({}) => {
    return (
        <div>
            <PhotoTeamCard photo="../src/assets/photos/Michelle Obama-Photoroom.png" ></PhotoTeamCard>      
            <TitleTeamCard title = "Fundador"></TitleTeamCard>  
        </div>
    )
}