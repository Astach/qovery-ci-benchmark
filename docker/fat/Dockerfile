# Large final layer (~2.5 GB) with no compilation, to isolate registry
# throughput and layer compression from build work.
FROM python:3.12-slim
RUN pip install --no-cache-dir torch --index-url https://download.pytorch.org/whl/cpu
CMD ["sh", "-c", "python -c 'import torch; print(torch.__version__)' && sleep infinity"]
