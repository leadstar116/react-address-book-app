import React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

function HomePage() {
    return (
        <div className="">
            <h2>HomePage</h2>
        </div>
    )
}

const mapStateToProps = (state: { }) => ({
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)