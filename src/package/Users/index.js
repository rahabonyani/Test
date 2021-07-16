import React, { useEffect } from "react";
import Header from "../../components/Header";
import Content from "../../components/baseContent";
import DataGridUser from "../../components/baseDataGrid";
import { getListOfUsersActions } from "../../actions/users/listOfUsers";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const UsersPackage = ({ children }) => {
    const [getListOfUsers] = useActions([getListOfUsersActions]);
    const { response, loading } = useSelector(
        ({ ListOfUsersReducer }) => ListOfUsersReducer
    );

    const requestGetList = async () => {
        await getListOfUsers("2");
    };
    useEffect(() => {
        requestGetList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header>{children}</Header>
            <Content>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <DataGridUser list={response} />
                )}
            </Content>
        </>
    );
};

export default UsersPackage;
