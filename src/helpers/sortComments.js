export default function sortComments(comments) {
    const maxParentCommentsCount = Math.max(
        ...comments.map(c => c.parentCommentsCount),
        0
    );

    const leveledComments = Array(maxParentCommentsCount + 1)
        .fill()
        .map(u => []);
    comments.forEach(c => {
        leveledComments[c.parentCommentsCount].push(c);
    });

    return leveledComments[0]
        .map(c => getNextInThread(c, leveledComments, maxParentCommentsCount))
        .flat();
}

function getNextInThread(comment, leveledComments, maxParentCommentsCount) {
    if (comment.parentCommentsCount + 1 > maxParentCommentsCount)
        return [comment];

    const replyCommentsToLatest = leveledComments[
        comment.parentCommentsCount + 1
    ].filter(c => c.parentComment === comment.id);

    return [
        comment,
        ...replyCommentsToLatest
            .map(c =>
                getNextInThread(c, leveledComments, maxParentCommentsCount)
            )
            .flat()
    ];
}
