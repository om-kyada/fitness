const handleActivityClick = (activity) => {
    setSelectedActivity(selectedActivity?.id === activity.id ? null : activity);
}; 