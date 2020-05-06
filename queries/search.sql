SELECT DISTINCT t.id, t.subject, t.content, u.username, t.time_posted,
       (SELECT COUNT(*) FROM posts p WHERE p.topic_id = t.id) AS post_count
FROM topics t
JOIN users u
ON (u.id = t.user_id)
JOIN posts p
ON (t.id = p.topic_id)
WHERE t.subject ILIKE $1
OR t.content ILIKE $1
OR p.content ILIKE $1
ORDER BY t.time_posted;