SELECT p.id, p.content, u.username, p.time_posted
FROM posts p
JOIN users u
ON (u.id = p.user_id)
WHERE p.topic_id = $1
ORDER BY p.time_posted;