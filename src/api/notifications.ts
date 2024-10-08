
import { NextApiRequest, NextApiResponse } from 'next';
import { FixMeLater } from '@/types';
import {
    getNotificationsData,
    setNotificationsData,
} from '../../data/notification';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query } = req;

    switch (method) {
        case 'GET':
            const { page = '1', pageSize = '20' } = query;

            const startIndex = (Number(page) - 1) * Number(pageSize);
            const endIndex = startIndex + Number(pageSize);

            const notifications = getNotificationsData().slice(startIndex, endIndex);


            res.status(200).json({ notifications });
            break;

        case 'DELETE':
            const { id } = query;

            if (!id) {
                res.status(400).json({ error: 'Notification ID is required for delete' });
                return;
            }

            const notificationIndex = getNotificationsData().findIndex(
                (notification: FixMeLater) => notification.id === Number(id)
            );

            if (notificationIndex === -1) {
                res.status(404).json({ error: 'Notification not found' });
                return;
            }

            // notificationsData.splice(notificationIndex, 1);
            setNotificationsData(getNotificationsData().splice(notificationIndex, 1));

            res.status(200).json({ message: 'Notification deleted successfully' });
            break;

        default:
            res.setHeader('Allow', ['GET', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}