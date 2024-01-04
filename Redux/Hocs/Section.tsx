import { connect } from "react-redux"
import { Section } from "../../App"


const mapStateToProps = (state:any)=> {
    return {quote: state.quotedata.quote}
}

export const SectionConnected=connect(mapStateToProps,null)(Section)