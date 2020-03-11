import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1></h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} /> 
            ) : (
                <p>You need to sign in!</p> 
            )}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info="Details" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={false} info="Details" />, document.getElementById('app'));