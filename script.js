const addNoteButton = document.querySelector('.new_note');

addNoteButton.addEventListener("click", () => {

    let note = document.createElement('div');
    note.className = 'new_note_style';
    let main = document.querySelector('main');
    main.append(note);

    let noteHead = document.createElement('div');
    noteHead.className = 'note_head';
    note.append(noteHead);

    let inputContainer = document.createElement('div')
    inputContainer.className = 'input-container'
    noteHead.append(inputContainer);

    let tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasks_container';
    note.append(tasksContainer)

    let input = document.createElement('input');
    input.className = 'write_note';
    input.maxLength = 20;
    inputContainer.append(input)

    let addButton = document.createElement('button');
    addButton.className = 'add_button_style';
    addButton.innerHTML = 'Add'
    inputContainer.append(addButton)

    let priority = document.createElement('select');
    priority.className = 'priority';
    noteHead.append(priority);

    let option1 = document.createElement('option');
    option1.className = 'option';
    option1.innerHTML = 'Urgent'
    priority.append(option1);

    let option2 = document.createElement('option');
    option2.className = 'option';
    option2.innerHTML = 'Non-urgent'
    priority.append(option2);

    let tasksArray = [];

    let wrongTask = document.createElement('div');
    wrongTask.className = 'error';
    wrongTask.innerHTML = 'Task already exists!'

    const addNewTask = () => {

        input.className = 'write_note';
        wrongTask.remove()

        let task = {
            id: tasksArray.length,
            text: input.value,
            priority: priority.value
        };

        tasksArray.push(task);

        let individualTaskContainer = document.createElement('div');
        individualTaskContainer.className = 'individual_task_container'
        tasksContainer.append(individualTaskContainer);

        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox')
        checkBox.className = 'checkbox';
        individualTaskContainer.append(checkBox);
        
        let visibleTask = document.createElement('div');
        visibleTask.className = 'task';
        visibleTask.innerHTML = input.value;
        individualTaskContainer.append(visibleTask);             

        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete_button';
        deleteButton.innerHTML = 'Delete'
        individualTaskContainer.append(deleteButton)

        deleteButton.id = tasksArray.length-1;

        input.value = '';

        deleteButton.addEventListener('click', () => {

        delete tasksArray[deleteButton.id]  

        individualTaskContainer.remove()
        }) 
    }

    const wrongTaskMessage = () => {

        for(let i = 0; i<tasksArray.length; i++) {

            if (tasksArray[i].text === input.value) {

                input.className = 'sameTask'

                noteHead.append(wrongTask);

                return
            } 
        }
        
        addNewTask()   
    }

    addButton.addEventListener('click', () => {

        if(tasksArray.length == 0) {

            addNewTask()
        } else {

            wrongTaskMessage()
        }
    })

    input.addEventListener('keydown', (event) => {

        if(event.code == "Enter" && tasksArray.length == 0) {

            addNewTask ()
        } else if(event.code == "Enter") {

            wrongTaskMessage()
        }
    })

})