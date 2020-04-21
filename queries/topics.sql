SELECT t.id, t.subject, t.content, u.username, t.time_posted,
       (SELECT COUNT(*) FROM posts p WHERE p.topic_id = t.id) AS post_count
FROM topics t
JOIN users u
ON (u.id = t.user_id);