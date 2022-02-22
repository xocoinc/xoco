import "./Address.css";
import { Link } from "react-router-dom";

const Address = () => {
    return ( <
        div className = "checkout2" >
        <
        h3 > Add Address < /h3> <
        form className = "form_details" >
        <
        div className = "name" >
        <
        div className = "fname" >
        <
        h4 > First name < /h4> <
        input type = "text"
        placeholder = "First name" / >
        <
        /div> <
        div className = "lname" >
        <
        h4 > Last name < /h4> <
        input type = "text"
        placeholder = "Last name" / >
        <
        /div> <
        /div> <
        div className = "phn_number" >
        <
        h4 > Mpesa Phone Number < /h4> <
        input type = "tel"
        placeholder = "+2547..." / >
        <
        /div> <
        div className = "delivery_address" >
        <
        h4 > Delivery Address < /h4> <
        input type = "text"
        placeholder = "street name/ building/ apartment/ house number" / >
        <
        /div> <
        Link to = "#" >
        <
        button type = "submit"
        className = "c2_button" > Save < /button> <
        /Link>

        <
        /form>

        <
        /div>

    );
};

export default Address;