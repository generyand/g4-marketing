export function searchTopics(query, data) {
  const lowercaseQuery = query.toLowerCase();
  return data.filter(item =>
    item.title.toLowerCase().includes(lowercaseQuery)
  );
}