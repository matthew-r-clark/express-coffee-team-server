SELECT t.id, t.subject, t.content, u.username, t.time_posted
FROM topics t
JOIN users u
ON (u.id = t.user_id)
WHERE t.subject ILIKE $1
OR t.content ILIKE $1
ORDER BY t.time_posted;