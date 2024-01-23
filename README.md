# Online Pomodoro timer
According to [Wikipedia](https://en.wikipedia.org/wiki/Pomodoro_Technique), the Pomodoro Technique is a time management method that splits your time working on a task to multiple intervals, intercepted by short breaks and long breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer the creator of this technique used as a university student.

The technique could be written like a block of code:
```
def timer(work_time, short_break_time, long_break_time, intervals_before_long_break):
    number_of_intervals_before_long_break = 0
    task_done = false
    while not task_done:
        number_of_intervals_before_long_break++
        Work for work_time
        if (number_of_intervals_before_long_break < intervals_before_long_break):
            Rest for short_break_time
        else
            number_of_intervals_before_long_break = 0
            Rest for long_break_time
```

### Todo:
- [ ] Build a webpage for a simple countdown
- [ ] Add multiple countdowns in one run, as intervals
- [ ] Save configurations to browser (cookie, local storage, session storage, indexedDB)
- [ ] Build a backend for storing configurations, replacing the browser
- [ ] Login (user, password, authentication)
- [ ] Logging total study time, total break time for each user
- [ ] TBD (analytics, leaderboards, simple reward system)

### Attribution:
- [Countdown Timer using Vue.js by fareez-ahamed](https://github.com/fareez-ahamed/countdown-vuejs)
