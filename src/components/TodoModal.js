import React, { useState } from "react";

import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducer/todoSlice";
import Button from "../components/Button";
import styles from "../styles/modules/modal.module.scss";

import { v4 as uuid } from "uuid";

function TodoModal({ modalOpen, setModelOpen }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toISOString,
        })
      );
    }
  };
  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => {
              setModelOpen(false);
            }}
            onKeyDown={() => {
              setModelOpen(false);
            }}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>Add Task</h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonComponent}>
              <Button type="submit" variant="primary">
                Add Task
              </Button>

              <Button
                type="button"
                variant="secondary"
                onClick={() => setModelOpen(false)}
                onKeyDown={() => setModelOpen(false)}
              >
                Calcel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal;