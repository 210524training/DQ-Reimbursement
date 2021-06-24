import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../../hook';
import Reimbursement from '../../../models/reimbursement';
import { getByRole } from '../../../remote/reimbursement-backend/reimbursement.api';
import { selectUser, UserState } from '../../../slices/user.slice';
import { FormButton } from '../login/LoginElem';

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

const ReimbursementPage = () => {

    const history = useHistory();
    const user = useAppSelector<UserState>(selectUser);

    const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);

    async function handleReimbursementChange() {
        if(user) {
            let table: Reimbursement[];
            table = await getByRole(user.role, user.username);
            setReimbursements(table);
        } else history.push('/');
    }
    const handleButtonClick = (e: ButtonEvent): void => {
        if(user) {
        history.push(`/reimbursements/${user.role}`)
    }
        alert('something went wrong')
}

    useEffect(() => {
        handleReimbursementChange()}
        );


    return (
        <>
        <FormButton onClick= {handleButtonClick}>View Final Grades</FormButton> 
        <table>
         <tr>{Object.keys(reimbursements[0]).map((key) => (
             <th>{key}</th>
         ))}
         </tr>
         {reimbursements.map((item) => (
             <tr>{Object.values(item).map((val) => (
                 <td>{val}</td>
         ))}
         </tr>
        ))}
        </table>
        </>
        )
}

export default ReimbursementPage;