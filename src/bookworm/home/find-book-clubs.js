import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const FindBookClubsComponent = () => {
    const {bookClubs} = useSelector((state) => state.bookClubs)

    console.log(bookClubs)

    return (
        bookClubs &&
        bookClubs.map((bookClub) =>
            <li className="list-group-item" key={bookClub._id}>
                <Link to={`/profile?id=${bookClub.ownerID}`}>{bookClub.name}</Link>
            </li>
        )
    )
}

export default FindBookClubsComponent