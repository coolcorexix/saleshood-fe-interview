## HOW TO START
```
pnpm install
pnpm run dev
```


## REQUIREMENT:
- Implement a list that can expand upto 10,0000 items that is fetched from a paginated endpoint: `/api/notifications?page=1`

- Each list item can be marked read / unread one by one / in bulk by sending PUT request to this endpoint: `/api/read-status`
Payload: 
```
notificationIds: [1,2,3], 
toBeUnread: false
```


