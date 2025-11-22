module.exports = {
    apps: [{
        name: "microsoft-rewards-bot",
        script: "npm",
        args: "start",
        cron_restart: "0 4 * * *", // Runs every day at 4:00 AM
        autorestart: false, // Don't auto-restart after completion (since it's a cron job)
        watch: false,
        env: {
            NODE_ENV: "production",
            TZ: "UTC",
            HEADLESS: "true" // Ensure headless mode on Pi
        }
    }]
}
