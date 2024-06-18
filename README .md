# Anagram Arranger

Anagram Arranger is an application that processes a list of words from a .txt file, arranging anagrams on the same lines in the output.


## File Structure

- **Frontend:** Collects the .txt file and sends it to the backend.
- **Backend:** Receives the .txt file, processes it, and sends back the rearranged list.

## How to Use

1. Click the **Select File** button and choose a .txt file containing a list of words.
2. Click the **Get it!** button to generate a new list where anagrams are grouped together on the same lines.
3. Click the **Clear the Screen** button to clear the screen.

## Main Logic

The main logic for rearranging the list of words is located in the backend main directory at:

`./utils/arrangePermutations.js`

You can view the code [here](https://github.com/adamr7777/task_backend/blob/main/utils/arrangePermutations.js).

## Link to Anagram Aranger

https://anagrams-sorted.netlify.app/

## Running the App Locally

If the app is offline, follow these steps to run it locally:

1. Clone the repositories:
    ```bash
    git clone git@github.com:adamr7777/task_backend.git
    git clone git@github.com:adamr7777/task_frontend.git
    ```

2. Set up the backend:
    ```bash
    cd task_backend
    npm install
    npm run dev
    ```

3. Set up the frontend:
    ```bash
    cd task_frontend
    npm install
    npm run dev
    ```

4. Open the app on `localhost` on the appropriate port (typically specified in the backend and frontend configurations).
